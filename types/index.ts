// Global type definitions

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

// Contact API Types
export interface ContactCreateRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ContactCreateResponse {
  status: boolean;
  message: string;
}

