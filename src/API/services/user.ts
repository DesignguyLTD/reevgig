import axiosInstance from '../axiosInstance';
import {
    PasswordResetConfirm,
    PasswordResetRequest,
    ResendActivation, SendUserMessage, SubscribeUser, Token,
    UserDataType,
    UserProfileType
} from "../types/userTypes";


/**
 * User Account Management
 */

// Create a new user
export const createUser = async (userData :UserDataType) => axiosInstance.post('/api/user/create/', userData);

// Get the authenticated user's details
export const fetchUserProfile = () => axiosInstance.get('/api/user/me/');

// Update user details
export const updateUserDetails = (userData :UserDataType) => axiosInstance.put('/api/user/me/', userData);

// Partially update user details
export const patchUserDetails = (userData :UserDataType) => axiosInstance.patch('/api/user/me/');

// Get user profile
export const getUserProfile = () => axiosInstance.get('/api/user/profile/');

// Update user profile
export const updateUserProfile = (profileData :UserProfileType) => axiosInstance.put('/api/user/profile/', profileData);

// Partially update user profile
export const patchUserProfile = (profileData :UserProfileType) => axiosInstance.patch('/api/user/profile/');


/**
 * Password Management
 */

// Reset password
export const resetPassword = (email :PasswordResetRequest) => axiosInstance.post('/api/user/password-reset/',  email );

// Confirm password reset
export const confirmResetPassword = (uid :string, token:string, confirmResetDate :PasswordResetConfirm) => axiosInstance.post(`/api/user/password-reset-confirm/${uid}/${token}/`,  confirmResetDate );



/**
 * Account Activation & Email Verification
 */

// Resend activation email
export const resendActivationEmail = (email :ResendActivation) => axiosInstance.post('/api/user/resend_activation/',  email );

// Subscribe to emails
export const subscribeEmail = (email :ResendActivation) => axiosInstance.post('/api/user/subscribe-email/',  email );

// Check email subscription status
export const checkEmailSubscription = () => axiosInstance.get('/api/user/subscribe-email/');




/**
 * Bulk Messaging
 */


// Send message to all users
export const sendMessageToAll = (allMessage :SendUserMessage) => axiosInstance.post('/api/user/send-all/', allMessage);

// Send message to a specific user
export const sendMessageToUser = (userMessage :SendUserMessage) => axiosInstance.post(`/api/user/send-email/`, userMessage);


/**
 * Token Management
 */


// Generate or refresh token
export const generateToken = (credentials :Token) => axiosInstance.post('/api/user/token/', credentials);


/**
 * User Subscription Management
 */

export const subscribeUser = (credentials :SubscribeUser) => axiosInstance.post('/api/user/subscribe-email/', credentials);
