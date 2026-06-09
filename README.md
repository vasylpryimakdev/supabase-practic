# Shey-Fit-Gym

A modern gym and fitness management platform built with Next.js 15, React 19, and Supabase. This application provides a comprehensive solution for managing gym memberships, fitness plans, user profiles, and payments through Stripe integration.

## 🚀 Features

- **User Authentication** - Secure authentication powered by Clerk
- **Membership Plans** - Browse and purchase various fitness plans
- **Subscription Management** - Handle recurring subscriptions with Stripe integration
- **User Dashboard** - Personal profile and subscription management
- **Admin Panel** - Comprehensive admin interface for:
  - Customer management
  - Plan creation and editing
  - Subscription oversight
  - User administration
- **Checkout System** - Secure payment processing with Stripe
- **Responsive Design** - Modern UI with Tailwind CSS and Radix UI components
- **Real-time Data** - Database integration with Supabase

## 🛠 Tech Stack

- **Frontend**
  - [Next.js 15](https://nextjs.org/) - React framework with App Router
  - [React 19](https://react.dev/) - UI library
  - [TypeScript](https://www.typescriptlang.org/) - Type safety
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
  - [Radix UI](https://www.radix-ui.com/) - Accessible UI components

- **Backend & Database**
  - [Supabase](https://supabase.io/) - Open-source Firebase alternative
  - [Supabase JS](https://supabase.com/docs/reference/javascript/introduction) - Supabase client

- **Authentication & Payments**
  - [Clerk](https://clerk.com/) - User management and authentication
  - [Stripe](https://stripe.com/) - Payment processing

- **State Management**
  - [Zustand](https://github.com/pmndrs/zustand) - Lightweight state management

- **Form Handling**
  - [React Hook Form](https://react-hook-form.com/) - Efficient form management
  - [Zod](https://zod.dev/) - TypeScript-first schema validation

- **Utilities**
  - [Day.js](https://day.js.org/) - Date manipulation
  - [Lucide React](https://lucide.dev/) - Icon library
  - [React Hot Toast](https://react-hot-toast.com/) - Toast notifications

## 📦 Project Structure

```
src/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── _components/             # App-level components
│   └── (private)/               # Protected routes
│       ├── account/             # User account pages
│       ├── admin/               # Admin dashboard
│       │   ├── customers/
│       │   ├── plans/          # Plan management
│       │   ├── subscriptions/  # Subscription management
│       │   └── users/          # User management
│       └── user/                # User pages
│           ├── profile/
│           ├── purchase-plan/
│           └── subscriptions/
├── components/
│   └── ui/                      # Reusable UI components
├── actions/                     # Server actions
│   ├── dashboard.ts
│   ├── payments.ts             # Payment operations
│   ├── plans.ts                # Plan operations
│   ├── subscriptions.ts        # Subscription operations
│   └── users.ts                # User operations
├── custom-layout/              # Custom layout components
├── global-store/               # Zustand stores
│   ├── plans-store.ts
│   └── users-store.ts
├── config/                     # Configuration files
│   └── supabase-config.ts
├── interfaces/                 # TypeScript interfaces
├── lib/                        # Utility functions
├── utils/                      # Helper utilities
└── middleware.ts               # Next.js middleware
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Supabase account and project
- Clerk account
- Stripe account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/vasylpryimakdev/shey-fit-gym.git
   cd supabase
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Configure Supabase**
   - Set up your database tables in Supabase
   - Configure authentication settings
   - Set up any required RLS policies

5. **Run the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔐 Authentication Flow

The application uses Clerk for authentication with the following flow:

1. Users sign up/login via Clerk
2. Authentication state is managed globally
3. Protected routes use Clerk middleware
4. User data is synced with Supabase

## 💳 Payment Integration

Stripe integration handles:

- Plan subscription
- Recurring payments
- Payment method management
- Invoice tracking

## 🗄️ Database Structure

Key entities managed in Supabase:

- **Users** - User profiles and metadata
- **Plans** - Gym membership plans with pricing
- **Subscriptions** - Active user subscriptions
- **Payments** - Payment transaction records

## 🎨 UI Components

Reusable components from Radix UI and custom implementations:

- Button
- Dialog
- Form
- Input
- Label
- Table
- Sheet
- Textarea
- Spinner
- Page Title

## 🚀 Deployment

The application can be deployed to:

- [Vercel](https://vercel.com/) (recommended for Next.js)
- Any Node.js hosting platform

### Vercel Deployment

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.io/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 🆘 Support

For issues and questions, please contact the development team.

---