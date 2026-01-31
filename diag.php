<?php
header('Content-Type: text/plain');
echo "=== SERVER DIAGNOSTIC ===\n";
echo "Current File: " . __FILE__ . "\n";
echo "Current Directory: " . getcwd() . "\n";
echo "Server Software: " . $_SERVER['SERVER_SOFTWARE'] . "\n";
echo "Document Root: " . $_SERVER['DOCUMENT_ROOT'] . "\n";

echo "\n=== DIRECTORY EXPLORATION ===\n";

function scan_up($dir)
{
    echo "Scanning: $dir\n";
    if (!is_dir($dir)) {
        echo "Error: Not a directory\n";
        return;
    }
    $files = scandir($dir);
    foreach ($files as $file) {
        $path = $dir . '/' . $file;
        $perms = substr(sprintf('%o', fileperms($path)), -4);
        $type = is_dir($path) ? '[DIR]' : '[FILE]';
        echo "$perms $type $file\n";
    }
}

$start = getcwd();
scan_up($start);

echo "\n=== PARENT DIRECTORY ===\n";
scan_up(dirname($start));

echo "\n=== DOMAINS CHECK ===\n";
$domains_path = realpath($start . '/../..');
if ($domains_path) {
    echo "Domains Path Found: $domains_path\n";
    // Look into domains folder
    $domains_dir = $domains_path . '/domains';
    if (is_dir($domains_dir)) {
        scan_up($domains_dir);

        // Specific check for dj-waste
        $target = $domains_dir . '/dj-waste.co.uk';
        if (is_dir($target)) {
            echo "\nTarget Domain Found: $target\n";
            scan_up($target);

            $ph = $target . '/public_html';
            if (is_dir($ph)) {
                echo "\nWeb Root Found: $ph\n";
                scan_up($ph);
            }
        }
    }
}

echo "\n=== PERMISSIONS TROUBLESHOOTING ===\n";
$index = 'index.html';
if (file_exists($index)) {
    echo "index.html exists. Perms: " . substr(sprintf('%o', fileperms($index)), -4) . "\n";
} else {
    echo "index.html NOT FOUND in current dir.\n";
}

echo "\n=== END DIAGNOSTIC ===\n";
?>