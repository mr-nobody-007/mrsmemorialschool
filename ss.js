// scripts.js

// Define available downloads for each class
const downloads = {
    class12a: [
        { name: "Syllabus (Class 12th PCM)", link: "files/syllabus_class_12_a.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class12b: [
        { name: "Syllabus (Class 12th PCB)", link: "files/syllabus_class_12_b.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class12c: [
        { name: "Syllabus (Class 12th Commerce)", link: "files/syllabus_class_12_c.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class11a: [
        { name: "Syllabus (Class 11th PCM)", link: "files/syllabus_class_11_a.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class11b: [
        { name: "Syllabus (Class 11th PCB)", link: "files/syllabus_class_11_b.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class11c: [
        { name: "Syllabus (Class 11th Commerce)", link: "files/syllabus_class_11_c.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class10: [
        { name: "Syllabus (Class 10th)", link: "files/syllabus_class_10.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class9: [
        { name: "Syllabus (Class 9th)", link: "files/syllabus_class_9.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class8: [
        { name: "Syllabus (Class 8th)", link: "files/syllabus_class_8.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class7: [
        { name: "Syllabus (Class 7th)", link: "files/syllabus_class_7.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class6: [
        { name: "Syllabus (Class 6th)", link: "files/syllabus_class_6.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class5: [
        { name: "Syllabus (Class 5th)", link: "files/syllabus_class_5.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class4: [
        { name: "Syllabus (Class 4th)", link: "files/syllabus_class_4.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class3: [
        { name: "Syllabus (Class 3rd)", link: "files/syllabus_class_3.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class2: [
        { name: "Syllabus (Class 2nd)", link: "files/syllabus_class_2.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class1: [
        { name: "Syllabus (Class 1st)", link: "files/syllabus_class_1.pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
};

// Handle class selection
document.getElementById("class-select").addEventListener("change", function () {
    const selectedClass = this.value;
    const downloadsContainer = document.getElementById("downloads-container");
    const downloadItems = document.getElementById("download-items");

    // Clear previous items
    downloadItems.innerHTML = "";

    if (downloads[selectedClass]) {
        // Show the downloads section
        downloadsContainer.style.display = "block";

        // Add download items
        downloads[selectedClass].forEach((item) => {
            const downloadDiv = document.createElement("div");
            downloadDiv.className = "download-item";
            downloadDiv.innerHTML = `
                <h4>${item.name}</h4>
                <a href="${item.link}" download>Download PDF</a>
            `;
            downloadItems.appendChild(downloadDiv);
        });
    } else {
        // Hide the downloads section if no downloads are found
        downloadsContainer.style.display = "none";
    }
});
