// Extract the registration form array
const registrationFormRaw = inputData.registrationForm;
const experienceQuestionUuid = "71af06c2-3067-4e07-a8ba-45aa2ec8b85a";
const eligibleQuestionUuid = "08c3314f-0dba-40ad-804d-1159facc7ad3";
const consentQuestionUuid = "afee2a60-95ad-4498-9a0e-19080b3d308e";

// Ensure the input is valid
if (!registrationFormRaw || typeof registrationFormRaw !== "string") {
  return { error: "registration_form is not valid" };
}

// Split the string by double newlines (each record is separated by a blank line)
const entries = registrationFormRaw
  .split("\n\n")
  .filter((entry) => entry.trim() !== "");

// Parse each entry into an object
const registrationForm = entries.map((entry) => {
  const fields = entry.split("\n"); // Split individual fields
  let parsedObject = {};

  fields.forEach((line) => {
    let [key, ...valueParts] = line.split(": "); // Handle key-value pairs
    if (key && valueParts.length > 0) {
      parsedObject[key.trim().toLowerCase()] = valueParts.join(": ").trim(); // Keep the full value
    }
  });

  return parsedObject;
});

// Find the parsed question objects
const experience = registrationForm.find(
  (item) => item.uuid === experienceQuestionUuid
);
const eligible = registrationForm.find(
  (item) => item.uuid === eligibleQuestionUuid
);
const consent = registrationForm.find(
  (item) => item.uuid === consentQuestionUuid
);

return {
  experience,
  eligible,
  consent,
};
