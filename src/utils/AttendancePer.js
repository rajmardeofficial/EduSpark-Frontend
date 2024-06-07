export const AttendancePer = (totalDay,presentDay) => {
    if (totalDay === 0) {
        return 0;
    }
    return ((presentDay/totalDay) * 100).toFixed(2);
}

export const countsUniqueSubjectAttData = (attendanceData, subjectData) => {
    let subjects = {};
    attendanceData?.forEach(entry => {
        if (!subjects[entry.subject]) {
            subjects[entry.subject] = { subject: entry.subject, name: '', isPresentT: 0, isPresentF: 0 };
        }
        if (entry.isPresent) {
            subjects[entry.subject].isPresentT++;
        } else {
            subjects[entry.subject].isPresentF++;
        }
    });

    // Add subject names to the result
    subjectData.forEach(subject => {
        if (subjects[subject._id]) {
            subjects[subject._id].name = subject.name;
        }
    });

    let result = [];
    for (let subjectId in subjects) {
        result.push(subjects[subjectId]);
    }

    return result;
}

export const attendanceMonthData = (attendanceData) => {
    let months = {};
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Initialize all months with isPresentT and isPresentF as 0
    monthNames.forEach(month => {
        months[month] = { month: month, isPresentT: 0, isPresentF: 0 };
    });

    // Update isPresentT and isPresentF based on attendance data
    attendanceData?.forEach(entry => {
        const month = new Date(entry.date).toLocaleString('en-us', { month: 'long' });
        if (entry.isPresent) {
            months[month].isPresentT++;
        } else {
            months[month].isPresentF++;
        }
    });

    return Object.values(months);
}