document.addEventListener("DOMContentLoaded", () => {
        const filterBtn = document.querySelector(".filter");
        const filterModal = document.querySelector(".filter-modal");
        const sidebar = document.querySelector(".col-xl-4.d-none.d-xl-block");

        if (!filterBtn || !filterModal || !sidebar) {
          console.warn(
            "Missing one of: .filter, .filter-modal, or sidebar element"
          );
          return;
        }

        function openFilterModal() {
          // Clear old content
          filterModal.innerHTML = "";

          // Create modal content
          const modalContent = document.createElement("div");
          modalContent.classList.add("filter-modal-content");

          // Clone sidebar content and make it visible
          const clonedSidebar = sidebar.cloneNode(true);
          clonedSidebar.classList.remove("d-none", "d-xl-block");
          modalContent.appendChild(clonedSidebar);

          // Add close button
          const closeBtn = document.createElement("span");
          closeBtn.classList.add("filter-close");
          closeBtn.innerHTML = "&times;";
          modalContent.appendChild(closeBtn);

          // Append content inside modal
          filterModal.appendChild(modalContent);

          // Show modal
          filterModal.classList.add("active");

          // Close on × click
          closeBtn.addEventListener("click", () => {
            filterModal.classList.remove("active");
          });
        }

        // Open modal on filter button click
        filterBtn.addEventListener("click", openFilterModal);

        // Close modal if clicking outside content
        filterModal.addEventListener("click", (e) => {
          if (e.target === filterModal) {
            filterModal.classList.remove("active");
          }
        });
      });