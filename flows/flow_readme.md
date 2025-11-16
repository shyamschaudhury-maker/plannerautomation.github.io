# 📁 Power Automate Flows for Planner (Basic Plans)

This folder contains all ready-to-import Power Automate flows designed specifically for **Planner Basic Plans**.  
Each flow helps automate common Planner tasks such as task creation, checklist generation, reminders, and bulk updates.

All flows are in **.json** format and can be imported directly into Power Automate.

---

## 📌 1. Task Creation Flow (`task_creation.json`)
**Purpose:**  
Automatically creates Planner tasks from Excel rows.

**Features:**
- Reads Excel table rows
- Creates corresponding tasks in a Planner plan + bucket
- Supports assignment, start date, due date, and notes

**Best For:**  
Teams managing their tasks in Excel and wanting rapid automation.

---

## 📌 2. Checklist Automation Flow (`checklist_automation.json`)
**Purpose:**  
Auto-creates checklist items inside a new or existing task.

**Features:**
- Reads checklist items from Excel
- Adds checklist items to correct tasks
- Helps structure detailed work packages

---

## 📌 3. Reminders Flow (`reminders.json`)
**Purpose:**  
Sends reminder notifications for tasks approaching their due date.

**Features:**
- Supports daily scheduled runs
- Sends email or Teams notifications
- Skips completed tasks automatically

---

## 📌 4. Bulk Update Flow (`bulk_update.json`)
**Purpose:**  
Updates multiple Planner tasks at once using an Excel file.

**Features:**
- Change task titles
- Assign users
- Edit notes, dates, or priority
- Supports mass updates without manual editing

---

## 📘 Importing the Flows
To import any flow:

1. Go to **Power Automate**  
2. Click **My Flows**  
3. Select **Import → Import Package (.zip/.json)**  
4. Upload the JSON file  
5. Connect your Excel, Planner, and Outlook connectors  
6. Save and run

---

## 📄 Need Templates?
Download the related Excel templates from the `/templates` folder.

---

## 💬 Support
If you need help customizing any flow, visit the **Contact** page on the website.

---
