import webview

class API:
    def get_employee_data(self):
        """Provide employee data to the frontend."""
        # Example employee data
        return [
            {"id": 1, "name": "Alice", "department": "Engineering"},
            {"id": 2, "name": "Bob", "department": "Marketing"},
            {"id": 3, "name": "Charlie", "department": "Human Resources"},
            {"id": 4, "name": "Diana", "department": "Finance"},
        ]

def start_app():
    api = API()

    # Create the pywebview window and bind the API
    window = webview.create_window(
        'Employee List',
        'index.html',
        js_api=api
    )

    # Start the webview with the API bound
    webview.start()

if __name__ == "__main__":
    start_app()
