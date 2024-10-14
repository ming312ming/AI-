// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const jobListings = document.getElementById('job-listings');
    const pageNumber = document.getElementById('page-number');
    const prevPage = document.getElementById('prev-page');
    const nextPage = document.getElementById('next-page');

    let currentPage = 1;
    const jobsPerPage = 10;

    // 模拟招聘信息数据
    const jobs = [
        { title: '前端工程师', company: '科技公司A', salary: '10k-15k', location: '北京', date: '2023-10-01' },
        { title: '后端工程师', company: '科技公司B', salary: '12k-18k', location: '上海', date: '2023-10-02' },
        // 更多招聘信息...
    ];

    function displayJobs(page) {
        jobListings.innerHTML = '';
        const start = (page - 1) * jobsPerPage;
        const end = start + jobsPerPage;
        const pageJobs = jobs.slice(start, end);

        pageJobs.forEach(job => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${job.title}</h3>
                <p>${job.company}</p>
                <p>薪资: ${job.salary}</p>
                <p>地点: ${job.location}</p>
                <p>发布时间: ${job.date}</p>
            `;
            jobListings.appendChild(li);
        });

        pageNumber.textContent = currentPage;
    }

    prevPage.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayJobs(currentPage);
        }
    });

    nextPage.addEventListener('click', () => {
        if (currentPage * jobsPerPage < jobs.length) {
            currentPage++;
            displayJobs(currentPage);
        }
    });

    displayJobs(currentPage);
});