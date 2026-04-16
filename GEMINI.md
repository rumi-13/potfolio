# Gemini.md

## 🔹 Project Context

This is a React + Vite portfolio project deployed using Vercel and hosted on GitHub.

The project:

* Works correctly in local development (`npm run dev`)
* Previously worked correctly in production (Vercel)
* Broke after repository renaming and configuration changes

---

## 🔹 Naming History (Critical)

The repository name was changed multiple times:

1. Original name:

   * `potfolio` (misspelled)

2. Renamed to:

   * `portfilio` (another variation)

3. These changes introduced inconsistencies across:

   * GitHub repository
   * Vite configuration (`base`)
   * Deployment setup (Vercel)
   * Possibly internal asset paths

---

## 🔹 Problem Description

After renaming and modifying configurations:

* Deployment on Vercel is broken
* The app still works locally
* A hard reset was performed to restore earlier code
* Despite rollback, deployment issues persist

---

## 🔹 Key Observation

| Environment         | Status    |
| ------------------- | --------- |
| Local (dev server)  | ✅ Working |
| Production (Vercel) | ❌ Broken  |

This indicates:

> A configuration mismatch between development and production environments

---

## 🔹 Likely Root Cause

Inconsistent handling of **paths and naming** due to:

* Repository name changes (`potfolio` ↔ `portfilio`)
* Possible incorrect `base` configuration in Vite
* Routing mismatch in React Router
* Incorrect asset paths
* Deployment URL assumptions

---

## 🔹 Agent Objective

Perform a **full diagnostic analysis** and resolve the mismatch causing deployment failure.

The agent must:

* Infer configuration dynamically
* Not assume any fixed base path
* Not rely on repository name directly

---

## 🔹 Required Analysis

### 1. Vite Configuration Audit

Inspect:

* `vite.config.js`

Check for:

* `base` field
* Any hardcoded paths referencing:

  * `/potfolio`
  * `/portfilio`

Determine:

* Whether build output paths are incorrect

---

### 2. React Router Analysis

Inspect:

* Router setup (`createBrowserRouter` or similar)

Check:

* Whether a `basename` is used
* Whether routes assume a subpath

Determine:

* If routing logic matches deployment environment

---

### 3. Build vs Production Behavior

Run:

```bash
npm run build
npm run preview
```

Compare with:

* `npm run dev`

Identify:

* Differences in routing
* Missing assets
* Broken paths

---

### 4. Asset Handling

Check how assets are referenced:

❌ Problematic:

```html
<img src="/assets/image.png" />
```

✅ Correct:

```js
import img from "./assets/image.png"
```

Ensure:

* No hardcoded absolute paths tied to old repo names

---

### 5. Deployment Environment (Vercel)

Understand:

* Vercel deploys apps at root (`/`)
* It does NOT automatically use repository name as base path

Check for:

* Any assumptions like:

  * `/potfolio/...`
  * `/portfilio/...`

---

### 6. Git History Inspection

Analyze:

* What changed during renaming
* Any edits in:

  * `vite.config.js`
  * `package.json`
  * routing files

Identify:

* Where inconsistency was introduced

---

## 🔹 Constraints

* Do NOT assume a base path like `/portfolio`
* Do NOT hardcode fixes without validation
* Do NOT modify UI/components unnecessarily

Focus only on:

* configuration
* routing
* deployment compatibility

---

## 🔹 Expected Outcome

After resolution:

* App works locally ✅
* App works on Vercel ✅
* No 404 errors
* Routes resolve correctly
* Assets load properly

---

## 🔹 Core Insight

This is NOT a logic bug.

This is a **system-level inconsistency** caused by:

* naming confusion (`potfolio` vs `portfilio`)
* path misconfiguration
* mismatch between dev and production environments

---

## 🔹 Final Instruction to Agent

Act as a debugging system.

Trace:

> Code → Build output → Deployment behavior

Identify:

* Where path assumptions break

Then:

* Fix the issue at the correct layer (config, routing, or asset resolution)

Avoid superficial fixes. Ensure consistency across the entire system.
