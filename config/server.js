module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 5500),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "9f5f34f47fb84e59fe4af7fc8226b5ee"),
    },
  },
});
