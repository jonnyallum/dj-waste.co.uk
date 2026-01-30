# DJ Waste Deployment Guide

This project is deployed to Hostinger using a "Zip & Ship" method.

## Hostinger SSH Credentials
- **IP**: 92.112.189.250
- **Port**: 65002
- **Username**: u384342620
- **Domain Path**: `/home/u384342620/domains/dj-waste.co.uk/public_html/`

## Quick Deploy Steps

### 1. Build the Project
```powershell
cd c:\Users\jonny\DJ Waste\dj-waste-app
npm install --legacy-peer-deps
npm run build
# Output will be in dist/public
```

### 2. Zip the Build
```powershell
Compress-Archive -Path "dist\public\*" -DestinationPath "site_deploy.zip" -Force
```

### 3. Upload Zip via SFTP
```powershell
curl.exe -k -T "site_deploy.zip" -u "u384342620:YOUR_PASSWORD" "sftp://92.112.189.250:65002/home/u384342620/domains/dj-waste.co.uk/public_html/site_deploy.zip"
```

### 4. Upload Unzip Script
```powershell
curl.exe -k -T "unzip.php" -u "u384342620:YOUR_PASSWORD" "sftp://92.112.189.250:65002/home/u384342620/domains/dj-waste.co.uk/public_html/unzip.php"
```

### 5. Execute & Auto-Cleanup
Visit `https://dj-waste.co.uk/unzip.php` in browser or run:
```powershell
curl.exe -k "https://dj-waste.co.uk/unzip.php"
```
The script auto-deletes itself and the zip after extraction.

## Live Site
- **URL**: https://dj-waste.co.uk
- **Last Deployed**: 2026-01-30

## Important Notes
- **MIME Types**: The `.htaccess` file handles correct JS/CSS MIME types.
- **Gallery Images**: Stored in `images/`. Ensure names match `Home.tsx`.
- **SSL**: Managed by Hostinger's free SSL.
