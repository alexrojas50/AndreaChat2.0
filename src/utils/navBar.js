import { ref } from "vue";

export const navBar = ref({
    isOpen: false,
    openCloseNav() {
        this.isOpen = !this.isOpen;
        console.log("abriendo o cerrando navbarrrr", this.isOpen)

    }
});