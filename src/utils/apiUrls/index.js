const BASE_URL = `https://testapi.easyhaionline.com`

export const API_URLS = {
    // Auth API
    login: `${BASE_URL}/api/v1/modules/student/login`,
    logout: `${BASE_URL}/api/v1/modules/student/logout`,
    loggedIn: `${BASE_URL}/api/v1/modules/student/loggedIn`,
    signup: `${BASE_URL}/api/v1/modules/student`,
    otpVerification: `${BASE_URL}/api/v1/modules/student/otpverification`,
    forgotPassOTP: `${BASE_URL}/api/v1/modules/student/sendotp`,
    changePassword: `${BASE_URL}/api/v1/modules/student/forgotpass`,

    // Course API
    getCourse: `${BASE_URL}/api/super-admin/progams/get-programs`,
    getCategory: `${BASE_URL}/api/super-admin/progams/get-programs`,
    getPrograms: (id) => `https://www.api.easyhaionline.com/api/super-admin/progams/get-program?id=${id}`,

    // Micro-Course API
    getList: `${BASE_URL}/api/super-admin/micro-courses/get-list`,

    // Payment Gateway API
    phonePe: `${BASE_URL}/api/v1/modules/phonepe`,
    jodo: `${BASE_URL}/api/v1/modules/jodopay/create`,
    ccAvenue: `${BASE_URL}/pay/api/super-admin/cc-avenue/getEnc`,
    wallet: `${BASE_URL}/api/super-admin/payments/wallet/buy-course`,

    // Blog API

    // Student DashBoard
    updateProfile: `${BASE_URL}/api/v1/modules/student`,

    getMap: `${BASE_URL}/api/super-admin/progams/get-map`,
}