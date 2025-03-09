<script>
    document.addEventListener("DOMContentLoaded", function() {
        function fetchNotifications() {
            fetch('/notifications')
                .then(response => response.json())
                .then(data => {
                    let notificationDropdown = document.querySelector(
                        ".dropdown-menu.notification-dropdown");
                    let notificationBell = document.querySelector(
                        ".nav-item-notification .badge-notification");

                    notificationDropdown.innerHTML = '';

                    if (data.length > 0) {
                        notificationBell.textContent = data.length;
                        notificationBell.style.display = "inline-block";

                        data.forEach(notification => {
                            let item = document.createElement("li");
                            item.innerHTML = `
                            <a class="dropdown-item" href="/admin/contacts/${notification.data.id}?notification=${notification.id}">
                                <div class="notification-item">
                                    <i class="fas fa-envelope me-2"></i>
                                    <div>
                                        <strong>${notification.data.name || 'Khách hàng'}</strong> đã gửi tin nhắn.
                                        <div class="small text-muted">${new Date(notification.created_at).toLocaleString()}</div>
                                    </div>
                                </div>
                            </a>
                        `;
                            notificationDropdown.appendChild(item);
                        });

                        // Thêm nút "Mark all as read"
                        let markAllAsRead = document.createElement("li");
                        markAllAsRead.innerHTML =
                            `<hr class="dropdown-divider">
                        <a class="dropdown-item text-center" href="/notifications/mark-all-as-read">Mark all as read</a>`;
                        notificationDropdown.appendChild(markAllAsRead);
                    } else {
                        notificationBell.style.display = "none";
                        notificationDropdown.innerHTML =
                            '<li><span class="dropdown-item">Không có thông báo mới</span></li>';
                    }
                })
                .catch(error => console.error("Error fetching notifications:", error));
        }

        fetchNotifications();
        setInterval(fetchNotifications, 5000);
    });
</script>
