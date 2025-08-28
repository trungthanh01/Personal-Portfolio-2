// Time and Location Manager for Hero Section
class TimeLocationManager {
    constructor() {
        this.timeElement = document.getElementById('current-time');
        this.dateElement = document.getElementById('current-date');
        this.locationElement = document.getElementById('current-location');
        this.timezoneElement = document.getElementById('timezone');
        
        this.init();
    }

    init() {
        this.updateTime();
        this.updateDate();
        this.updateLocation();
        
        // Cập nhật thời gian mỗi giây
        setInterval(() => {
            this.updateTime();
        }, 1000);
        
        // Cập nhật ngày mỗi phút
        setInterval(() => {
            this.updateDate();
        }, 60000);
    }

    updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        
        if (this.timeElement) {
            this.timeElement.textContent = timeString;
        }
    }

    updateDate() {
        const now = new Date();
        const dateString = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        if (this.dateElement) {
            this.dateElement.textContent = dateString;
        }
    }

    updateLocation() {
        // Thông tin địa điểm cố định cho HCMC
        const locationInfo = {
            city: 'Ho Chi Minh City',
            country: 'Vietnam',
            timezone: 'GMT+7',
            coordinates: '10.8231° N, 106.6297° E'
        };

        if (this.locationElement) {
            this.locationElement.textContent = `${locationInfo.city}, ${locationInfo.country}`;
        }

        if (this.timezoneElement) {
            this.timezoneElement.textContent = locationInfo.timezone;
        }

        // Thêm tooltip với thông tin chi tiết
        this.addLocationTooltip(locationInfo);
    }

    addLocationTooltip(locationInfo) {
        if (this.locationElement) {
            this.locationElement.title = `Coordinates: ${locationInfo.coordinates}`;
        }
    }

    // Phương thức để cập nhật địa điểm theo thời gian thực (nếu cần)
    updateLocationRealTime() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log(`Current location: ${latitude}, ${longitude}`);
                    // Có thể thêm logic để xác định thành phố từ coordinates
                },
                (error) => {
                    console.log('Location access denied or error:', error.message);
                }
            );
        }
    }

    // Phương thức để hiển thị thời gian theo múi giờ khác
    showTimeInTimezone(timezone) {
        const now = new Date();
        const timeInZone = now.toLocaleTimeString('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        
        return timeInZone;
    }

    // Phương thức để format thời gian đẹp hơn
    formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
}

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', () => {
    new TimeLocationManager();
    
    // Thêm hiệu ứng loading
    const timeElements = document.querySelectorAll('#current-time, #current-date');
    timeElements.forEach(element => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transition = 'opacity 0.5s ease-in';
        }, 500);
    });
});

// Export để sử dụng ở file khác nếu cần
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TimeLocationManager;
}
