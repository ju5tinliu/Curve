import tkinter as tk
from tkinter import scrolledtext
import requests

# Function to handle the API call
def send_prompt_to_langchain():
    api_url = "https://example-ollama-service.com/generate"  # Replace with your actual LangChain API URL
    prompt_text = prompt_entry.get("1.0", tk.END).strip()

    # Replace the payload and headers with what's required by your specific LangChain API
    payload = {
        "prompt": prompt_text,
        # Include other necessary parameters here
    }
    headers = {
        "Content-Type": "application/json",
        # "Authorization": "Bearer YOUR_API_KEY",  # Uncomment if auth is needed
    }

    response = requests.post(api_url, json=payload, headers=headers)
    if response.status_code == 200:
        response_text.set(response.json().get("text", "No response text found."))
    else:
        response_text.set("Failed to fetch response from API.")

# Set up the GUI
window = tk.Tk()
window.title("LangChain API Demo")

tk.Label(window, text="Enter your prompt:").pack(pady=5)
prompt_entry = tk.Text(window, height=5, width=50)
prompt_entry.pack(pady=5)

send_button = tk.Button(window, text="Send Prompt", command=send_prompt_to_langchain)
send_button.pack(pady=5)

response_text = tk.StringVar()
response_label = tk.Label(window, textvariable=response_text)
response_label.pack(pady=5)

window.mainloop()