# 🍽️ AI Calorie Counter | GPT-4o-Powered Nutrition Estimator  


![image](https://github.com/user-attachments/assets/13583031-90f4-4006-b48c-9106d280ce7e)


## 📖 Introduction  

**AI Calorie Counter** is an **AI-based web application** that estimates the **number of calories in a meal** by analyzing an image. Powered by **OpenAI's GPT-4o vision model** and built with **Flask**, this app provides **detailed breakdowns** of food items and their estimated caloric values — all from a single photo.  

💡 You can use the app either through a **web interface** or directly from the **command line**.  

🚨 **Disclaimer:** This tool is for **educational purposes only** and should **not be used for medical or dietary decisions**.  



## 🚀 Features  

✔️ **AI-Powered Calorie Estimation** – Uses GPT-4o to analyze food images  
✔️ **Image Upload Support** – Get instant calorie insights from a photo  
✔️ **Detailed JSON Output** – Includes reasoning, food list, and total calories  
✔️ **Web Interface with Flask** – Simple and intuitive for any user  
✔️ **Command-Line Usage** – Easily estimate calories via terminal  
✔️ **Local Execution** – No data is sent externally beyond OpenAI's API  



## 🏗️ Technologies  

- 🐍 **Python 3.12** – Main programming language  
- 🤖 **OpenAI GPT-4o** – Vision and reasoning model  
- 🌐 **Flask** – Web framework for the UI  
- 🌿 **python-dotenv** – For managing environment variables  
- 📦 **Base64 & JSON** – For image encoding and structured API response  
- 🖼 **Jinja2 Templates** – HTML rendering in Flask  



## 📦 Installation  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/Yacine-Mekideche/ai-calorie-counter.git
cd ai-calorie-counter
```

### **2️⃣ Set Up Your Environment**
Add in .env your OpenAI API key inside:
```bash
OPENAI_API_KEY=your_openai_key_here
```

### **3️⃣ Create a Virtual Environment**
Using Conda:
```bash
conda create -n calorie-counter python=3.12
conda activate calorie-counter
```

Or using venv:
```bash
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows
```


### **4️⃣ Install Dependencies**
```bash
pip install -r requirements.txt
```

## 📦 Installation  

### **▶️ Run the Web App**
```bash
python server.py
```

Then open your browser and go to:
http://localhost:5000

You’ll be able to upload a meal photo and get calorie estimations directly in the UI.


---

## 🎯 Demo  

<a href="https://www.youtube.com/watch?v=XJX0ZiRzRes" target="_blank">
  <img src="https://img.youtube.com/vi/XJX0ZiRzRes/maxresdefault.jpg" alt="AI Calorie Counter - Demo Video" style="max-width:100%; height:auto;">
</a>



## 📬 Contact Me  

💡 **Let's connect! Whether you're interested in AI, Machine Learning, or tech collaborations, feel free to reach out.**  

[![Website](https://img.shields.io/badge/My%20Website-%23000000.svg?style=for-the-badge&logo=About.me&logoColor=white)](https://iacine.tech)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yacine-mekideche/)  
[![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Yacine-Mekideche)  
[![Malt](https://img.shields.io/badge/Malt-%23FF6F61.svg?style=for-the-badge&logo=malt&logoColor=white)](https://malt.fr/profile/yacinemekideche)  
[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@iacine_tech)  

📩 **Email for business inquiries:** contact@iacine.tech  

---

© 2025 IAcine. All rights reserved.


