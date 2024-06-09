export function scrollToSection(sectionName) {
    const targetElement = document.getElementById(sectionName);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - ( // Optional offset for header/navbar height
                document.querySelector('header')?.offsetHeight || 50
            ),
            behavior: 'smooth',
        });
    } else {
        alert('none')
        console.warn(`Element with ID "${sectionName}" not found for scrolling.`);
    }
};