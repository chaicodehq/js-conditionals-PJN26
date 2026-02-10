/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  if (password === "" || typeof password !== "string") {
    return "weak";
  }
  // Your code here
  let criterias = [false, false, false, false, false];

  if (password.length >= 8) {
    criterias[0] = true;
  }

  for (let i = 0; i < password.length; i++) {
    let currChar = password.charAt(i);
    if (currChar >= "A" && currChar <= "Z") {
      criterias[1] = true;
    } else if (currChar >= "a" && currChar <= "z") {
      criterias[2] = true;
    } else if (currChar >= "0" && currChar <= "9") {
      criterias[3] = true;
    } else {
      criterias[4] = true;
    }
  }

  let criteriaCount = 0;

  for (let i = 0; i < criterias.length; i++) {
    if (criterias[i]) {
      criteriaCount++;
    }
  }

  if (criteriaCount == 5) {
    return "very strong";
  } else if (criteriaCount == 4) {
    return "strong";
  } else if (criteriaCount >= 2) {
    return "medium";
  } else {
    return "weak";
  }
}
