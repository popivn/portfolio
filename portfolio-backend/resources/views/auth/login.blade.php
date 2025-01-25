<x-guest-layout>
    <!-- Session Status -->
    @if(session('status'))
        <div class="alert alert-success mb-4">
            {{ session('status') }}
        </div>
    @endif

    <form method="POST" action="{{ route('login') }}">
        @csrf

        <!-- Email Address -->
        <div class="mb-3">
            <label for="email" class="form-label">{{ __('Email') }}</label>
            <input type="email" id="email" name="email" class="form-control" value="{{ old('email') }}" required autofocus autocomplete="username">
            @if ($errors->has('email'))
                <div class="text-danger mt-1">
                    {{ $errors->first('email') }}
                </div>
            @endif
        </div>

        <!-- Password -->
        <div class="mb-3">
            <label for="password" class="form-label">{{ __('Password') }}</label>
            <input type="password" id="password" name="password" class="form-control" required autocomplete="current-password">
            @if ($errors->has('password'))
                <div class="text-danger mt-1">
                    {{ $errors->first('password') }}
                </div>
            @endif
        </div>

        <!-- Remember Me -->
        <div class="form-check mb-3">
            <input type="checkbox" id="remember_me" name="remember" class="form-check-input">
            <label for="remember_me" class="form-check-label">
                {{ __('Remember me') }}
            </label>
        </div>

        <div class="d-flex justify-content-between align-items-center mb-3">
            @if (Route::has('password.request'))
                <a href="{{ route('password.request') }}" class="text-decoration-underline text-muted">
                    {{ __('Forgot your password?') }}
                </a>
            @endif

            <button type="submit" class="btn btn-primary">
                {{ __('Log in') }}
            </button>
        </div>
    </form>
</x-guest-layout>
