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

echo "Starting Deep Cleanup...<br>";

$files = scandir('.');
foreach ($files as $file) {
    if ($file === '.' || $file === '..' || $file === 'cleanup.php' || $file === '.htaccess' || $file === 'site_deploy.zip') {
        continue;
    }

    if (is_dir($file)) {
        rmdir_recursive($file);
        echo "Deleted Directory: $file<br>";
    } else {
        unlink($file);
        echo "Deleted File: $file<br>";
    }
}

echo "Cleanup Finished.<br>";
// Do not unlink yet so I can retry if it fails
?>