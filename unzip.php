<?php
$zip = new ZipArchive;
if ($zip->open('site_deploy.zip') === TRUE) {
    $zip->extractTo('./');
    $zip->close();
    echo 'Done - DJ Waste deployed successfully!';
    // Auto-cleanup
    unlink('site_deploy.zip');
    unlink('unzip.php');
} else {
    echo 'Error opening zip file';
}
?>
