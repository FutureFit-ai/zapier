## **Zap Overview**

- **Zap Name:**  Palette Zap Template
- **Purpose:** Provide an example of how to leverage the FutureFit AI -> New User trigger to pass registration data to downstream systems.  This can be used as an example for any event consumers and shows how to reliably retrieve registration responses.  With the new registration form field, changes to the answers for each question, or even label changes to the question itself, will be transparent to your Zap.
- **Screenshot**
    - An example [Zap Overview](./zap_overview.png), which contains:
      - The FutureFit AI app which provides events for user registrations
      - A code step which finds the registration form answers and creates clear names for them to use in downstream mapping actions
      - A destination step, in which the fields from the FutureFit AI app and code step are mapped to the destination system

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
    The code that should be added to the configure step of the run javascript action: [question-lookup-template.js](./question-lookup-template.js). This action is used to search for the desired questions and answers as configured by your tenant in the Pathways platform.  Because the search is based on the immutable question UUID, changes to the question text, or the answers associated to the question, will not impact this action.
- **Notes:**
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
  