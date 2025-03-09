<nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
    <div class="container-fluid">
        <!-- Logo -->
        <a class="navbar-brand" href="{{ route('dashboard') }}">
            <x-application-logo class="h-9 w-auto text-dark" />
        </a>

        <!-- Hamburger -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <!-- Navigation Links -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link {{ request()->routeIs('dashboard') ? 'active' : '' }}"
                        href="{{ route('dashboard') }}">
                        {{ __('Dashboard') }}
                    </a>
                </li>
                {{-- <li class="nav-item"><a href="{{ route('user-detail') }}" class="nav-link">User Detail</a></li> --}}
            </ul>
            <x-nav-link :href="route('user.detail')" :active="request()->routeIs('user.detail')">
                {{ __('User Detail') }}
            </x-nav-link>
            <!-- Settings Dropdown -->
            <ul class="navbar-nav ml-auto">
                @auth
                    <!-- Bell Notification Dropdown -->
                    <li class="nav-item dropdown nav-item-notification me-2">
                        <a class="nav-link" href="#" id="notificationDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-bell"></i>
                            <span class="badge rounded-pill bg-danger badge-notification" style="display: none;"></span>
                        </a>

                        <ul class="dropdown-menu dropdown-menu-end notification-dropdown"
                            aria-labelledby="notificationDropdown">
                            <li><span class="dropdown-item">Loading...</span></li>
                        </ul>
                    </li>

                    <!-- User Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            {{ Auth::user()->name }}
                        </a>

                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                            <li>
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                    onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>
                            </li>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                        </ul>
                    </li>
                @endauth
            </ul>
        </div>
    </div>
</nav>
@include('nofialert')
