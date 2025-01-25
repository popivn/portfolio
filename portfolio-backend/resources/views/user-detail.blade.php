<x-app-layout>
    <x-slot name="header">
        <h2 class="fw-semibold fs-4 text-dark">
            {{ __('Add User Details') }}
        </h2>
    </x-slot>

    <div class="py-5">
        <div class="container">
            <div class="card shadow-sm rounded-lg">
                <div class="card-body">
                    <form method="POST" action="{{ route('user-detail.store') }}" enctype="multipart/form-data">
                        @csrf

                        <!-- Nickname -->
                        <div class="mb-3">
                            <label for="nickname" class="form-label">{{ __('Nickname') }}</label>
                            <input type="text" name="nickname" id="nickname" class="form-control" value="{{ old('nickname') }}" required>
                        </div>

                        <!-- Birthday -->
                        <div class="mb-3">
                            <label for="birthday" class="form-label">{{ __('Birthday') }}</label>
                            <input type="date" name="birthday" id="birthday" class="form-control" value="{{ old('birthday') }}" required>
                        </div>

                        <!-- School -->
                        <div class="mb-3">
                            <label for="school" class="form-label">{{ __('School') }}</label>
                            <input type="text" name="school" id="school" class="form-control" value="{{ old('school') }}">
                        </div>

                        <!-- Start Learning At -->
                        <div class="mb-3">
                            <label for="start_learning_at" class="form-label">{{ __('Start Learning At') }}</label>
                            <input type="date" name="start_learning_at" id="start_learning_at" class="form-control" value="{{ old('start_learning_at') }}">
                        </div>

                        <!-- End Learning At -->
                        <div class="mb-3">
                            <label for="end_learning_at" class="form-label">{{ __('End Learning At') }}</label>
                            <input type="date" name="end_learning_at" id="end_learning_at" class="form-control" value="{{ old('end_learning_at') }}">
                        </div>

                        <!-- Status -->
                        <div class="mb-3">
                            <label for="status" class="form-label">{{ __('Status') }}</label>
                            <input type="text" name="status" id="status" class="form-control" value="{{ old('status') }}" required>
                        </div>

                        <!-- Description -->
                        <div class="mb-3">
                            <label for="description" class="form-label">{{ __('Description') }}</label>
                            <textarea name="description" id="description" class="form-control" rows="3">{{ old('description') }}</textarea>
                        </div>

                        <!-- Profile Image -->
                        <div class="mb-3">
                            <label for="profile_image" class="form-label">{{ __('Profile Image') }}</label>
                            <input type="file" name="profile_image" id="profile_image" class="form-control">
                        </div>

                        <!-- Portfolio Link -->
                        <div class="mb-3">
                            <label for="portfolio_link" class="form-label">{{ __('Portfolio Link') }}</label>
                            <input type="url" name="portfolio_link" id="portfolio_link" class="form-control" value="{{ old('portfolio_link') }}">
                        </div>

                        <!-- Submit Button -->
                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary">{{ __('Save') }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
