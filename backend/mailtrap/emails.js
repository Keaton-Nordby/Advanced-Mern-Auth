import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

// Helper to replace placeholders in templates
const fillTemplate = (template, variables) => {
    return Object.keys(variables).reduce((acc, key) => {
        const regex = new RegExp(`{${key}}`, "g");
        return acc.replace(regex, variables[key]);
    }, template);
};

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];

    try {
        const htmlContent = fillTemplate(VERIFICATION_EMAIL_TEMPLATE, {
            verificationCode: verificationToken,
            email: email
        });

        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: htmlContent,
            category: "Email verification"
        });

        console.log("Verification email sent successfully", response);

    } catch (error) {
        console.error("Error sending verification email", error);
        throw new Error(`Error sending verification email: ${error}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "15e67517-1201-4d8d-9aef-0029b93e61a9",
            template_variables: {
                company_info_name: "Keaton Auth",
                name: name
            },
        });

        console.log("Welcome email sent successfully", response);

    } catch (error) {
        console.error("Error sending welcome email", error);
        throw new Error(`Error sending welcome email: ${error}`);
    }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset"
        })
        
    } catch (error) {
        console.error(`Error sending password reset email`, error);

        throw new error(`Error sending password reset email: ${error}`) 
    }
}
