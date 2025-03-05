<template>
    <button
        class="px-6 py-3 mt-3 rounded-full text-primary bg-gradient-secondary font-semibold flex items-center gap-2 transition-transform duration-300 ease-in-out hover:scale-105">
        <slot></slot>
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </button>
</template>