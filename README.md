# Makaan - Real Estate Listing Website

Makaan is a dynamic real estate listing platform designed to connect buyers, sellers, and renters seamlessly. The project leverages modern web development technologies to deliver an intuitive and responsive user experience.

## Features

- **Browse Listings:** Search and filter real estate listings by location, price, and property type.
- **User Authentication:** Secure login and registration system for buyers, sellers, and agents.
- **Add Listings:** Property owners and agents can add, update, and manage their listings.
- **Contact Agents:** Directly communicate with property agents or owners.

---

## Tech Stack

### Frontend
- **HTML5**
- **CSS3**
- **JavaScript**

### Backend
- **Node.js** for server-side routing and middleware.
- **Python FastAPI** for APIs and backend logic.
- **PostgreSQL** for database management.

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js
- Python (3.9 or higher)
- PostgreSQL

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/makaan.git
   cd makaan
   ```

2. **Frontend Setup:**
   Navigate to the `frontend` folder and install dependencies if any.

3. **Backend Setup:**
   - Navigate to the `backend` folder.
   - Create a virtual environment and activate it:
     ```bash
     python -m venv env
     source env/bin/activate  # On Windows use `env\Scripts\activate`
     ```
   - Install the required Python packages:
     ```bash
     pip install -r requirements.txt
     ```
   - Set up the PostgreSQL database:
     - Create a database named `makaan`.
     - Update database connection details in the `.env` file.
   - Run database migrations:
     ```bash
     alembic upgrade head
     ```

4. **Start the Server:**
   - Start the FastAPI backend:
     ```bash
     uvicorn main:app --reload
     ```
   - Start the Node.js server:
     ```bash
     node server.js
     ```

5. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.


   ##Screenshots:
  
   ![image](https://github.com/user-attachments/assets/adc685a8-d8a9-4d36-9719-fb90fd0c00f9)

   ![image](https://github.com/user-attachments/assets/5faec48b-a05e-4359-9440-d8a733febd8e)

   ![image](https://github.com/user-attachments/assets/98e6e562-9df9-4e02-af17-eb840d3f7c89)

   ![image](https://github.com/user-attachments/assets/3ff37b35-70a0-4ba1-b9d3-72df8a2c5054)



