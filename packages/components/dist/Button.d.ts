import React from "react";
type ButtonVariant = "primary" | "strong" | "borderless";
export type ButtonProps = {
    children: string;
    variant?: ButtonVariant;
    icon?: React.ReactNode;
};
export declare const Button: ({ children, variant, icon, }: ButtonProps) => React.JSX.Element;
export {};
