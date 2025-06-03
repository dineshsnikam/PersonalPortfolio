using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


namespace PersonalPortfolioWebApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // 1️⃣ Add DbContext with connection string from appsettings.json
            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
           

            // 2️⃣ Add MVC services
            builder.Services.AddControllersWithViews();

            var app = builder.Build();

            // 3️⃣ Configure middleware
            if (!app.Environment.IsDevelopment())
            {   
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles(); // 🔍 हे विसरू नकोस – Static Files साठी आवश्यक

            app.UseRouting();

            app.UseAuthorization();

            // 4️⃣ Define routing
            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");

            app.Run();
        }
    }
}
