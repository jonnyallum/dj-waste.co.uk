# CD Waste Deployment Guide

This project is deployed to Hostinger using a "Zip & Ship" method to bypass slow file transfers and connection limits.

## Prerequisites
- Windows PowerShell
- `curl` installed and available in PATH
- Hostinger SFTP Credentials

## Quick Deploy Steps

### 1. Build the Project
```powershell
cd client
npm install --legacy-peer-deps
npm run build
# Output will be in dist/public
```

### 2. Zip the Build
```powershell
Compress-Archive -Path "dist\public\*" -DestinationPath "site_deploy.zip" -Force
```

### 3. Upload Zip
```powershell
# Replace USER, PASS, DOMAIN, IP with actual credentials
curl.exe -k -T "site_deploy.zip" -u USER:PASS sftp://IP:PORT/home/USER/domains/DOMAIN/public_html/site_deploy.zip
```

### 4. Upload Unzip Script
Create `unzip.php`:
```php
<?php
$zip = new ZipArchive;
if ($zip->open('site_deploy.zip') === TRUE) {
    $zip->extractTo('./');
    $zip->close();
    echo 'Done';
} else echo 'Error';
?>
```
Upload it:
```powershell
curl.exe -k -T "unzip.php" -u USER:PASS sftp://IP:PORT/home/USER/domains/DOMAIN/public_html/unzip.php
```

### 5. Execute & Cleanup
Visit `https://cd-waste.co.uk/unzip.php` in browser.
Then delete `site_deploy.zip` and `unzip.php` via SFTP or a cleanup script.

## Important Notes
- **MIME Types**: The `.htaccess` file handles correct JS/CSS MIME types. Ensure it's not overwritten by a default one (Vite build doesn't generate one, so it persists).
- **Gallery Images**: Stored in `images/`. If replacing visuals, ensure names match `Home.tsx`.
