/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, reactive } from 'vue';
import GradientButton from "@/components/Button/GradientButton.vue";
const showFormPopup = ref(false);
const isSubmitting = ref(false);
const form = reactive({
    name: '',
    email: '',
    message: ''
});
const errors = reactive({
    name: '',
    email: '',
    message: ''
});
const notification = reactive({
    show: false,
    type: 'success',
    message: ''
});
const togglePopup = () => {
    showFormPopup.value = !showFormPopup.value;
    if (!showFormPopup.value) {
        resetForm();
    }
};
const closeOnOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
        togglePopup();
    }
};
const resetForm = () => {
    form.name = '';
    form.email = '';
    form.message = '';
    errors.name = '';
    errors.email = '';
    errors.message = '';
};
const validateForm = () => {
    let isValid = true;
    errors.name = '';
    errors.email = '';
    errors.message = '';
    if (!form.name.trim()) {
        errors.name = 'Please enter your full name';
        isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
        errors.email = 'Please enter your email';
        isValid = false;
    }
    else if (!emailRegex.test(form.email)) {
        errors.email = 'Invalid email';
        isValid = false;
    }
    if (!form.message.trim()) {
        errors.message = 'Please enter a message';
        isValid = false;
    }
    return isValid;
};
const showNotification = (type, message) => {
    notification.type = type;
    notification.message = message;
    notification.show = true;
    setTimeout(() => {
        notification.show = false;
    }, 3000);
};
const submitForm = async () => {
    if (!validateForm())
        return;
    isSubmitting.value = true;
    try {
        showNotification('success', `Successfully sent! Thank you ${form.name}, we will contact you soon.`);
        togglePopup();
    }
    catch (error) {
        showNotification('error', 'An error occurred. Please try again later.');
    }
    finally {
        isSubmitting.value = false;
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
/** @type {[typeof GradientButton, typeof GradientButton, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(GradientButton, new GradientButton({
    ...{ 'onClick': {} },
    ...{ class: "transition-transform duration-300 ease-in-out hover:border hover:border-primary" },
}));
const __VLS_1 = __VLS_0({
    ...{ 'onClick': {} },
    ...{ class: "transition-transform duration-300 ease-in-out hover:border hover:border-primary" },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onClick: (__VLS_ctx.togglePopup)
};
__VLS_2.slots.default;
var __VLS_2;
const __VLS_7 = {}.Transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    name: "fade",
}));
const __VLS_9 = __VLS_8({
    name: "fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_10.slots.default;
if (__VLS_ctx.showFormPopup) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (__VLS_ctx.closeOnOutsideClick) },
        ...{ class: "fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: () => { } },
        ...{ class: "bg-gradient-secondary border border-primary/20 p-6 rounded-xl shadow-2xl w-full max-w-md relative transform transition-all duration-300 ease-out" },
        ...{ class: ({ 'scale-100 opacity-100': __VLS_ctx.showFormPopup, 'scale-95 opacity-0': !__VLS_ctx.showFormPopup }) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "absolute -top-3 -left-3 w-16 h-16 bg-gradient-primary rounded-lg -z-10 blur-xl opacity-70" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-primary rounded-lg -z-10 blur-xl opacity-70" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: "text-2xl font-bold text-white mb-6 flex items-center gap-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
        ...{ onSubmit: (__VLS_ctx.submitForm) },
        ...{ class: "space-y-4" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "space-y-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: "block text-secondary text-sm font-medium" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "relative" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
        type: "text",
        value: (__VLS_ctx.form.name),
        ...{ class: ({ 'border-red-500': __VLS_ctx.errors.name }) },
        ...{ class: "w-full pl-10 pr-4 py-3 bg-bgcolor/80 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none text-white transition-all duration-200" },
        placeholder: "Enter your full name",
    });
    if (__VLS_ctx.errors.name) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "text-red-400 text-xs mt-1" },
        });
        (__VLS_ctx.errors.name);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "space-y-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: "block text-secondary text-sm font-medium" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "relative" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
        type: "email",
        ...{ class: ({ 'border-red-500': __VLS_ctx.errors.email }) },
        ...{ class: "w-full pl-10 pr-4 py-3 bg-bgcolor/80 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none text-white transition-all duration-200" },
        placeholder: "example@email.com",
    });
    (__VLS_ctx.form.email);
    if (__VLS_ctx.errors.email) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "text-red-400 text-xs mt-1" },
        });
        (__VLS_ctx.errors.email);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "space-y-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: "block text-secondary text-sm font-medium" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "relative" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        value: (__VLS_ctx.form.message),
        rows: "4",
        ...{ class: ({ 'border-red-500': __VLS_ctx.errors.message }) },
        ...{ class: "w-full pl-10 pr-4 py-3 bg-bgcolor/80 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none text-white transition-all duration-200 resize-none" },
        placeholder: "Enter your message...",
    });
    if (__VLS_ctx.errors.message) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "text-red-400 text-xs" },
        });
        (__VLS_ctx.errors.message);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex justify-end gap-3 mt-6" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.togglePopup) },
        type: "button",
        ...{ class: "px-4 py-2.5 bg-bgcolor border border-primary/30 text-secondary rounded-lg hover:bg-bgcolor/80 transition-all duration-200" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        type: "submit",
        ...{ class: "px-4 py-2.5 bg-gradient-primary hover:bg-gradient-hover text-white rounded-lg transition-all duration-200 flex items-center gap-2" },
        disabled: (__VLS_ctx.isSubmitting),
    });
    if (__VLS_ctx.isSubmitting) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.togglePopup) },
        ...{ class: "absolute -top-3 -right-3 bg-gradient-primary text-white p-2 rounded-lg hover:bg-gradient-hover transition-all duration-200 shadow-lg" },
    });
    const __VLS_11 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
        icon: "fa-solid fa-times",
        ...{ class: "w-4 h-4" },
    }));
    const __VLS_13 = __VLS_12({
        icon: "fa-solid fa-times",
        ...{ class: "w-4 h-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
}
var __VLS_10;
const __VLS_15 = {}.Transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    name: "notification",
}));
const __VLS_17 = __VLS_16({
    name: "notification",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_18.slots.default;
if (__VLS_ctx.notification.show) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "fixed bottom-4 right-4 p-4 rounded-lg shadow-lg max-w-md z-50 flex items-center gap-3" },
        ...{ class: (__VLS_ctx.notification.type === 'success' ? 'bg-green-800 text-white' : 'bg-red-800 text-white') },
    });
    if (__VLS_ctx.notification.type === 'success') {
        const __VLS_19 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
            icon: "fa-solid fa-check-circle",
            ...{ class: "w-5 h-5 flex-shrink-0" },
        }));
        const __VLS_21 = __VLS_20({
            icon: "fa-solid fa-check-circle",
            ...{ class: "w-5 h-5 flex-shrink-0" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    }
    if (__VLS_ctx.notification.type === 'error') {
        const __VLS_23 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
            icon: "fa-solid fa-exclamation-circle",
            ...{ class: "w-5 h-5 flex-shrink-0" },
        }));
        const __VLS_25 = __VLS_24({
            icon: "fa-solid fa-exclamation-circle",
            ...{ class: "w-5 h-5 flex-shrink-0" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.notification.message);
}
var __VLS_18;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-in-out']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:border']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:border-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black/70']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-primary/20']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-md']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-out']} */ ;
/** @type {__VLS_StyleScopedClasses['scale-100']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-100']} */ ;
/** @type {__VLS_StyleScopedClasses['scale-95']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-0']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['-top-3']} */ ;
/** @type {__VLS_StyleScopedClasses['-left-3']} */ ;
/** @type {__VLS_StyleScopedClasses['w-16']} */ ;
/** @type {__VLS_StyleScopedClasses['h-16']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['-z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['blur-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-70']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['-bottom-3']} */ ;
/** @type {__VLS_StyleScopedClasses['-right-3']} */ ;
/** @type {__VLS_StyleScopedClasses['w-16']} */ ;
/** @type {__VLS_StyleScopedClasses['h-16']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['-z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['blur-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-70']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['border-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-10']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-bgcolor/80']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-primary/20']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-primary/50']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:border-primary/50']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-400']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['border-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-10']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-bgcolor/80']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-primary/20']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-primary/50']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:border-primary/50']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-400']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['border-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-10']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-bgcolor/80']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-primary/20']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-primary/50']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:border-primary/50']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['resize-none']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-400']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-bgcolor']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-primary/30']} */ ;
/** @type {__VLS_StyleScopedClasses['text-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-bgcolor/80']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gradient-hover']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['-top-3']} */ ;
/** @type {__VLS_StyleScopedClasses['-right-3']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gradient-hover']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-4']} */ ;
/** @type {__VLS_StyleScopedClasses['right-4']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-md']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            GradientButton: GradientButton,
            showFormPopup: showFormPopup,
            isSubmitting: isSubmitting,
            form: form,
            errors: errors,
            notification: notification,
            togglePopup: togglePopup,
            closeOnOutsideClick: closeOnOutsideClick,
            submitForm: submitForm,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
