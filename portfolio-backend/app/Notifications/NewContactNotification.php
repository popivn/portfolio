<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use App\Models\Contact;

class NewContactNotification extends Notification
{
    use Queueable;
    private $contact;

    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('New Contact Message')
            ->greeting('Hello Admin,')
            ->line("You have a new contact message from: {$this->contact->name}")
            ->line("Email: {$this->contact->email}")
            ->line("Message: {$this->contact->message}")
            ->action('View Messages', url('/admin/contacts'))
            ->line('Thank you for using our application!');
    }

    public function toArray($notifiable)
    {
        return [
            'name' => $this->contact->name,
            'email' => $this->contact->email,
            'message' => $this->contact->message,
        ];
    }
}
