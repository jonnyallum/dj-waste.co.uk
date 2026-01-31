<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

function rmdir_recursive($dir)
{
    if (!is_dir($dir))
        return;
    foreach (scandir($dir) as $file) {
        if ('.' === $file || '..' === $file)
            continue;
        if (is_dir("$dir/$file"))
            rmdir_recursive("$dir/$file");
        else
            unlink("$dir/$file");
    }
    rmdir($dir);
}

echo "Starting deployment cleanup...<br>";
// These are the folders from your screenshot that shouldn't be here
$to_delete = ['client', 'server', 'shared', 'patches', 'test_extract', '.git', 'assets', 'images'];
foreach ($to_delete as $folder) {
    if (is_dir($folder)) {
        rmdir_recursive($folder);
        echo "Deleted Folder: $folder<br>";
    }
}

// Delete loose source files from your screenshot
$files_to_delete = ['package.json', 'package-lock.json', 'pnpm-lock.yaml', 'tsconfig.json', 'tsconfig.node.json', 'vite.config.ts', 'Ideas.md', 'DEPLOYMENT_GUIDE.md'];
foreach ($files_to_delete as $f) {
    if (is_file($f)) {
        unlink($f);
        echo "Deleted File: $f<br>";
    }
}

echo "Cleanup Finished. Extracting production bundle...<br>";

$zip = new ZipArchive;
if ($zip->open('site_deploy.zip') === TRUE) {
    // Standard extraction
    if ($zip->extractTo('./')) {
        echo 'Extraction Successful!<br>';
    } else {
        echo 'Standard Extraction Failed, attempting manual loop...<br>';
        for ($i = 0; $i < $zip->numFiles; $i++) {
            $filename = $zip->getNameIndex($i);
            $fileinfo = pathinfo($filename);
            if (!is_dir($fileinfo['dirname'])) {
                mkdir($fileinfo['dirname'], 0755, true);
            }
            if (substr($filename, -1) !== "/") {
                copy("zip://site_deploy.zip#$filename", $filename);
            }
        }
        echo "Manual Loop Complete!<br>";
    }
    $zip->close();

    echo "Verifying Deployment...<br>";
    if (file_exists('index.html')) {
        echo "✅ index.html FOUND!<br>";
    } else {
        echo "❌ index.html NOT FOUND!<br>";
    }

    if (is_dir('assets')) {
        echo "✅ assets/ folder FOUND!<br>";
    }

    unlink('site_deploy.zip');
    unlink(__FILE__);
} else {
    echo '❌ Failed to open site_deploy.zip';
}
?>