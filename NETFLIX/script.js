// Select all accordion items
const accordions = document.getElementsByClassName('accordion-item');

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', function() {
    // Toggle the 'active' class on the clicked item
    this.classList.toggle('active');

    // Find the content panel associated with this item
    const content = this.querySelector('.content');

    // Toggle the max-height to show/hide content
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.padding = '0 20px';
    } else {
        // Close other open accordions (optional, mimics Netflix style)
        for (let j = 0; j < accordions.length; j++) {
            if (accordions[j] !== this) {
                accordions[j].classList.remove('active');
                accordions[j].querySelector('.content').style.maxHeight = null;
                accordions[j].querySelector('.content').style.padding = '0 20px';
            }
        }
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = '30px 20px';
    }
  });
}
