<x-guest-layout>
    <form method="POST" action="{{ route('register') }}">
        @csrf

        <!-- Name -->
        <div class="mb-3">
            <label for="name" class="form-label">{{ __('Name') }}</label>
            <input type="text" id="name" name="name" class="form-control" value="{{ old('name') }}" required autofocus autocomplete="name">
            @if ($errors->has('name'))
                <div class="text-danger mt-1">
                    {{ $errors->first('name') }}
                </div>
            @endif
        </div>

        <!-- Email Address -->
        <div class="mb-3">
            <label for="email" class="form-label">{{ __('Email') }}</label>
            <input type="email" id="email" name="email" class="form-control" value="{{ old('email') }}" required autocomplete="username">
            @if ($errors->has('email'))
                <div class="text-danger mt-1">
                    {{ $errors->first('email') }}
                </div>
            @endif
        </div>

        <!-- Password -->
        <div class="mb-3">
            <label for="password" class="form-label">{{ __('Password') }}</label>
            <input type="password" id="password" name="password" class="form-control" required autocomplete="new-password">
            @if ($errors->has('password'))
                <div class="text-danger mt-1">
                    {{ $errors->first('password') }}
                </div>
            @endif
        </div>

        <!-- Confirm Password -->
        <div class="mb-3">
            <label for="password_confirmation" class="form-label">{{ __('Confirm Password') }}</label>
            <input type="password" id="password_confirmation" name="password_confirmation" class="form-control" required autocomplete="new-password">
            @if ($errors->has('password_confirmation'))
                <div class="text-danger mt-1">
                    {{ $errors->first('password_confirmation') }}
                </div>
            @endif
        </div>

        <div class="d-flex justify-content-between align-items-center mb-3">
            <a href="{{ route('login') }}" class="text-decoration-underline text-muted">
                {{ __('Already registered?') }}
            </a>
            <button type="submit" class="btn btn-primary ms-3">
                {{ __('Register') }}
            </button>
        </div>
    </form>
</x-guest-layout>
