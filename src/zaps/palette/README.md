## **Zap Overview**

- **Zap Name:**  Palette Zap Template
- **Purpose:** Provide an example of how to leverage the FutureFit AI -> New User trigger to pass registration data to downstream systems
- **Screenshot**
    - An example [Zap Overview](./zap_overview.png)

---

## **Zap Steps**

### **1. Trigger**

- **App:** FutureFit AI
- **Event:** New User
- **Trigger Details:**
    - Triggers whenever a new user is created in the FFAI Pathways platform

---

### **2. Actions**

### **Action 1**

- **App:** Code by Zapier
- **Event:**  Run Javascript
- **Input**:
    - registrationForm ← Registration Form (from FutureFit AI → New User)
- **Configure:**
    The code that should be added to the configure step of the run javascript action: [question-lookup-template.js](./question-lookup-template.js). This action is used to search for the desired questions and answers as configured by your tenant in the Pathways platform.
- **Configure:**
    - While the template provides suggested names for each of the current registration questions they can be changed.  If changed then the name of the fields that the action produces would need to be accounted for in downstream actions.  For example, if you change the 'experience' property to be 'work_experience' then instead of looking for 'Experience Answer' in the destination action you would be looking for 'Work Experience Answer'.
- **Screenshot**
    - [Code by Zapier Action](./code_by_zapier_action.png)

### **Action 2**

- **App:** Whatever destionation you desire
- **Event:**  destination action
- **Key Fields Mapped:**
    - [HubSpot Experience Answer Field] → Experience Answer (From code action above)
    - [HubSpot Eligibilty Answer Field] → Eligibility Answer (From code action above)
    - [HubSpot Consent Answer Field] -> Consent Answer (From code action above)
- **Screenshots:**  
    - [Example of a create row destination](./spreadsheet_create_row_action.png) used for testing
  