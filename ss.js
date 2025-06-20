// ss.js

// Define available downloads for each class
const downloads = {
    class12a: [
        { name: "Syllabus (Class 12th PCM)", link: "./12th holiday homework (2).pdf" },
        { name: "Exam Datesheet 2024-2025", link: "files/datesheet_2024.pdf" }
    ],
    class12b: [
        { name: "Syllabus (Class 12th PCB)", link: "./Chemistry_Project_Salivary_Amylase_Complete.docx" },
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
    ]
};

// Function to display downloads for selected class
function showDownloadsForClass(classValue) {
    const container = document.getElementById("downloads-container");
    const itemsContainer = document.getElementById("download-items");

    // Clear previous items
    itemsContainer.innerHTML = "";

    if (downloads[classValue]) {
        downloads[classValue].forEach(item => {
            const div = document.createElement("div");
            div.classList.add("download-item");

            const link = document.createElement("a");
            link.href = item.link;
            link.textContent = item.name;
            link.setAttribute("target", "_blank");

            div.appendChild(link);
            itemsContainer.appendChild(div);
        });

        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}

// Add event listener to dropdown
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById("class-select");
    select.addEventListener("change", (e) => {
        const selectedClass = e.target.value;
        showDownloadsForClass(selectedClass);
    });
});
