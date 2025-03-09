<template>
    <div class="space-y-2">
        <label class="block text-secondary text-sm font-medium">{{ label }}</label>
        <div class="relative group">
            <span class="absolute left-3 top-4 text-primary/70">
                <font-awesome-icon :icon="['fas', icon]" class="w-4 h-4" />
            </span>

            <input v-if="type !== 'textarea'" :type="type" :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)" :class="{ 'border-red-500': error }"
                class="w-full pl-10 pr-4 py-3.5 bg-bgcolor/60 border border-primary/20 rounded-xl outline-none text-white transition-all duration-200"
                :placeholder="`Enter your ${label.toLowerCase()}`">

            <textarea v-else :value="modelValue" rows="4" @input="$emit('update:modelValue', $event.target.value)"
                :class="{ 'border-red-500': error }"
                class="w-full pl-10 pr-4 py-3.5 bg-bgcolor/60 border border-primary/20 rounded-xl outline-none text-white transition-all duration-200 resize-none"
                :placeholder="`Enter your ${label.toLowerCase()}...`"></textarea>

            <p v-if="error" class="text-red-400 text-xs mt-1 ml-1">{{ error }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    label: String,
    type: String,
    icon: String,
    modelValue: String,
    error: String
});

defineEmits(['update:modelValue']);
</script>