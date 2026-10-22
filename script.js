"use strict";

document.addEventListener("DOMContentLoaded", function () {

    // Project search
    const searchInput = document.getElementById("projectSearch");
    const clearButton = document.getElementById("clearSearch");
    const projectCards = document.querySelectorAll(".project-card");
    const noResults = document.getElementById("noResults");
    const searchMessage = document.getElementById("searchMessage");

    function searchProjects() {
        const query = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        projectCards.forEach(function (card) {
            const searchableText =
                (card.textContent + " " + (card.dataset.search || ""))
                .toLowerCase();

            const matches = searchableText.includes(query);

            card.hidden = !matches;

            if (matches) {
                visibleCount++;
            }
        });

        noResults.hidden = visibleCount !== 0;
        searchMessage.textContent = query
            ? visibleCount + " project(s) found."
            : "";
    }

    searchInput.addEventListener("input", searchProjects);

    clearButton.addEventListener("click", function () {
        searchInput.value = "";
        searchProjects();
        searchInput.focus();
    });

    // Project detail buttons
    const detailsPanel = document.getElementById("projectDetails");
    const detailsTitle = document.getElementById("detailsTitle");
    const detailsText = document.getElementById("detailsText");
    const closeDetails = document.getElementById("closeDetails");

    const projectInformation = {
        scholarship: {
            title: "Scholarship Finder 🎓",
            text: "A student support concept that helps learners explore scholarships, understand eligibility criteria, and prepare application documents. Actual scholarship details must be verified through official sources."
        },
        ecotrack: {
            title: "EcoTrack 🌿",
            text: "An environmental awareness concept that helps people learn about waste segregation, recycling, and everyday sustainable habits."
        },
        wellness: {
            title: "Wellness Buddy 💚",
            text: "A wellness concept for organising daily routines, hydration reminders, breaks, and positive self-care habits."
        }
    };

    document.querySelectorAll(".details-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            const project = projectInformation[button.dataset.project];

            if (!project) {
                return;
            }

            detailsTitle.textContent = project.title;
            detailsText.textContent = project.text;
            detailsPanel.hidden = false;

            detailsPanel.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        });
    });

    closeDetails.addEventListener("click", function () {
        detailsPanel.hidden = true;
    });

    // Dark and light mode
    const themeButton = document.getElementById("themeBtn");

    themeButton.addEventListener("click", function () {
        const isLight = document.body.classList.toggle("light-mode");

        themeButton.textContent = isLight ? "🌙" : "☀️";
        themeButton.setAttribute(
            "aria-label",
            isLight ? "Switch to dark mode" : "Switch to light mode"
        );
    });

    // Idea button
    const ideaButton = document.getElementById("ideaBtn");
    const ideaMessage = document.getElementById("ideaMessage");

    ideaButton.addEventListener("click", function () {
        ideaMessage.textContent =
            "Thanks for your interest! This demo is ready for your idea submission feature.";
    });

});