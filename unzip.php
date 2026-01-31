<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

function deleteDir($dirPath)
{
    if (!is_dir($dirPath))
        return;
    $files = array_diff(scandir($dirPath), array('.', '..'));
    foreach ($files as $file) {
        (is_dir("$dirPath/$file")) ? deleteDir("$dirPath/$file") : unlink("$dirPath/$file");
    }
    return rmdir($dirPath);
}

echo "Starting cleanup...<br>";
deleteDir('assets');
deleteDir('images');
echo "Cleanup done.<br>";

$zip = new ZipArchive;
if ($zip->open('site_deploy.zip') === TRUE) {
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
    $zip->close();
    echo 'Manual Extraction Complete!<br>';

    echo "Verifying assets...<br>";
    if (file_exists('assets/index-9Rp78z5K.js')) {
        echo "FOUND: assets/index-9Rp78z5K.js (" . filesize('assets/index-9Rp78z5K.js') . " bytes)<br>";
    } else {
        echo "NOT FOUND: assets/index-9Rp78z5K.js<br>";
    }

    if (file_exists('images/dj-logo.png')) {
        echo "FOUND: images/dj-logo.png<br>";
    } else {
        echo "NOT FOUND: images/dj-logo.png<br>";
    }

    unlink('site_deploy.zip');
    unlink(__FILE__);
} else {
    echo 'Failed to open site_deploy.zip';
}
?>