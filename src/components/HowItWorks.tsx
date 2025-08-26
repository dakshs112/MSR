import { motion } from 'framer-motion';
import { Calendar, Sparkles, Smile } from 'lucide-react';

const steps = [
	{
		icon: Calendar,
		title: 'Book Your Service',
		description:
			"Contact us via WhatsApp or phone for a free quote. We'll schedule a convenient time for your cleaning service.",
		number: '01',
	},
	{
		icon: Sparkles,
		title: 'Professional Cleaning',
		description:
			'Our trained technicians arrive with professional equipment and eco-friendly solutions to deep clean your furniture.',
		number: '02',
	},
	{
		icon: Smile,
		title: 'Enjoy Freshness',
		description:
			'Relax and enjoy your refreshed, sanitized furniture that looks and feels like new again.',
		number: '03',
	},
];

const HowItWorks = () => {
	const openWhatsAppBooking = () => {
		// same normalization logic used in WhatsAppButton component
		let digits = '7896175272'.replace(/\D/g, '');
		if (digits.length === 10) digits = '91' + digits;
		const message =
			"Hello MSR! I'd like to book a cleaning service. Please help me schedule a time.";
		const url = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
		window.open(url, '_blank');
	};

	return (
		<section className="py-20 bg-gradient-hero">
			<div className="container mx-auto px-6">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
						How It Works
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Simple, fast, and professional. Get your furniture cleaned in just
						three easy steps.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{steps.map((step, index) => (
						<motion.div
							key={step.number}
							className="text-center"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							{/* Step Number */}
							<motion.div
								className="relative mb-6"
								whileHover={{ scale: 1.1 }}
								transition={{ type: 'spring', stiffness: 300 }}
							>
								<div className="w-24 h-24 mx-auto bg-gradient-card rounded-full flex items-center justify-center shadow-card border border-border/50">
									<step.icon className="w-10 h-10 text-primary" />
								</div>
								<div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground shadow-glow">
									{step.number}
								</div>
							</motion.div>

							{/* Step Content */}
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
								viewport={{ once: true }}
							>
								<h3 className="text-xl font-bold text-foreground mb-3">
									{step.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{step.description}
								</p>
							</motion.div>

							{/* Connector Line (except for last item) */}
							{index < steps.length - 1 && (
								<motion.div
									className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50"
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
									viewport={{ once: true }}
									style={{ transform: 'translateX(50%)' }}
								/>
							)}
						</motion.div>
					))}
				</div>

				{/* Call to Action */}
				<motion.div
					className="text-center mt-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					viewport={{ once: true }}
				>
					<p className="text-lg text-muted-foreground mb-6">
						Ready to transform your furniture? Get started today!
					</p>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<div
							className="inline-flex items-center gap-2 bg-gradient-accent px-8 py-4 rounded-full shadow-glow hover:shadow-premium transition-all duration-300 cursor-pointer"
							role="button"
							tabIndex={0}
							onClick={openWhatsAppBooking}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') openWhatsAppBooking();
							}}
						>
							<Calendar className="w-5 h-5 text-accent-foreground" />
							<span className="font-semibold text-accent-foreground">
								Book Now
							</span>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default HowItWorks;