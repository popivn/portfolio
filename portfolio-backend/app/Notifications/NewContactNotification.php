<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;
use App\Models\Contact;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class NewContactNotification extends Notification implements ShouldQueue
{
    use Queueable;

    protected $contact;

    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    // Thông báo qua email
    public function via($notifiable)
    {
        return ['mail', 'database', 'broadcast'];
    }

    // Nội dung email
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Có người vừa gửi tin nhắn liên hệ!')
            ->greeting('Xin chào Admin,')
            ->line('Có một khách hàng vừa gửi liên hệ qua website:')
            ->line('Họ tên: ' . $this->contact->name)
            ->line('Email: ' . $this->contact->email)
            ->line('Nội dung: ' . $this->contact->message)
            ->action('Xem chi tiết', url('/admin/contacts/' . $this->contact->id))
            ->line('Vui lòng kiểm tra và phản hồi!');
    }

    // Thông báo trong Database
    public function toDatabase($notifiable)
    {
        try {
            return [
                'name' => $this->contact->name,
                'email' => $this->contact->email,
                'message' => $this->contact->message,
                'link' => url('/admin/contacts/' . $this->contact->id)
            ];
        } catch (\Exception $e) {
            Log::error('Lỗi khi lưu notification vào database: ' . $e->getMessage());
            return ['error' => $e->getMessage()];
        }
    }

    // Thông báo Real-time (Broadcasting)
    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'message' => 'Có một liên hệ mới từ ' . $this->contact->name
        ]);
    }
}
