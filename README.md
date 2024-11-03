# pywebview_file_explorer
A tiny program to discover the capabilities of Pywebview and OpenUI5 in collaboration
In uses: Python 3.12, Pywebview, OpenUI5 (in form static HTML pages)

## Build Binary file for executable app
To package your pywebview application with OpenUI5 using PyInstaller, follow these steps. PyInstaller will bundle all the dependencies and files into a standalone executable, making it easier to distribute.

### Step-by-Step Guide to Packaging with PyInstaller
#### Step 1: Install PyInstaller
If you haven't installed PyInstaller yet, do so by running:

bash
Sao chép mã
pip install pyinstaller
#### Step 2: Create a PyInstaller Spec File
A spec file lets you configure how PyInstaller packages the application. This includes adding extra files (like HTML, CSS, and JavaScript) and setting up application settings.

First, generate a default spec file by running:

bash
Sao chép mã
pyinstaller --name EmployeeApp --onefile main.py
This will create a file named EmployeeApp.spec in your project directory.

#### Step 3: Edit the Spec File to Include HTML, CSS, and JS Files
Open EmployeeApp.spec in a text editor and add your HTML, CSS, and JavaScript files to the datas section. This section should point to all the files and directories your application depends on, including the index.html and assets folder.

Here’s how the EmployeeApp.spec file might look after modifications:

python
Sao chép mã
# EmployeeApp.spec

# -*- mode: python -*-

block_cipher = None

# Adding extra files such as HTML, CSS, and JS into the datas
a = Analysis(
    ['main.py'],
    pathex=['.'],
    binaries=[],
    datas=[
        ('index.html', '.'),  # HTML file at the root
        ('assets/', 'assets'),  # Assets folder with CSS and JS files
    ],
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
)

pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)

exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name='EmployeeApp',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    console=False,
    icon=None,  # Optional: specify a path to an icon if you have one
)

coll = COLLECT(
    exe,
    a.binaries,
    a.zipfiles,
    a.datas,
    strip=False,
    upx=True,
    upx_exclude=[],
    name='EmployeeApp'
)
In this example:

datas includes both index.html (at the root of the project) and the assets folder, which contains style.css and script.js.
The console=False option hides the command line window when the app runs. Set it to True if you want a console window (helpful for debugging).
Step 4: Build the Application
Run PyInstaller with the modified spec file to create the executable:

bash
Sao chép mã
pyinstaller EmployeeApp.spec
This command will create a dist folder containing the standalone executable EmployeeApp (or EmployeeApp.exe on Windows).

Step 5: Test the Packaged Application
Go to the dist directory and launch the executable:

bash
Sao chép mã
cd dist
./EmployeeApp  # On Windows, use EmployeeApp.exe
The application should open with a native window, and all assets (HTML, CSS, JS) should load correctly, showing the responsive OpenUI5 interface.

Troubleshooting Common Issues
Missing Files: If certain files (like index.html or assets) aren’t loading, ensure that the paths in datas are correct. Paths are relative to the root of the project.
JavaScript or CSS Not Loading: Check the browser console in the pywebview window for any path-related errors.
Testing Cross-Platform: PyInstaller builds an executable for the OS it’s run on. To create a Windows executable, for example, you need to run PyInstaller on Windows or use a cross-compiling tool.
Example Project Structure After Packaging
After running PyInstaller, you should see a structure similar to the following:

bash
Sao chép mã
project/
├── assets/
│   ├── style.css
│   └── script.js
├── dist/
│   └── EmployeeApp/
│       └── EmployeeApp.exe  # Windows executable
├── EmployeeApp.spec
└── main.py
This setup packages the entire pywebview and OpenUI5 application into a single executable that’s ready to distribute. 
