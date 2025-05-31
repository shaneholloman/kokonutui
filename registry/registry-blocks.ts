import type { Registry } from "./schema";

export const block: Registry = [
    {
        name: "ai-card-generation",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: ["button", "input", "select", "textarea"],
        files: [
            {
                path: "components/kokonutui/blocks/ai-card-generation/ai-card-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/ai-card-generation/header-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/ai-card-generation/form-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/ai-card-generation/settings-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/ai-card-generation/preview-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/ai-card-generation/error-generation.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "auth-basic",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: ["button", "input", "separator"],
        files: [
            {
                path: "components/kokonutui/blocks/auth-basic/auth-basic.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/auth-basic/auth-form.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/auth-basic/social-login.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "ai-chat",
        type: "registry:block",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["button", "input", "textarea"],
        files: [
            {
                path: "components/kokonutui/blocks/ai-chat/ai-chat.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/blocks/ai-chat/multimodal-input.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "card-grid",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: [],
        files: [
            {
                path: "components/kokonutui/card-grid.tsx",
                type: "registry:component",
            },
            {
                path: "components/kokonutui/card/card-08.tsx",
                type: "registry:component",
            },
        ],
    },
];
