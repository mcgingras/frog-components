"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
// loading state?
// inactive state?
const Button = ({ children, variant = "primary", icon, }) => {
    return (react_1.default.createElement("button", { className: (0, clsx_1.default)("agora-border agora-px-5 agora-py-3 agora-text-base agora-font-semibold agora-rounded-lg", variant === "primary" &&
            "agora-border-stone-500 agora-text-stone-900 agora-hover:bg-zinc-500 agora-hover:text-white", variant === "strong" &&
            "agora-border-stone-900 agora-bg-stone-900 agora-text-white agora-hover:bg-zinc-600", variant === "borderless" &&
            "agora-border-transparent agora-text-zinc-500 agora-hover:text-zinc-600") }, children));
};
exports.Button = Button;
