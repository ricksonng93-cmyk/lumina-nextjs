import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Container className="py-24 text-center max-w-xl">
        <p className="text-7xl font-black text-border mb-6" aria-hidden="true">
          404
        </p>
        <h1 className="text-2xl font-bold text-ink mb-3">Page introuvable</h1>
        <p className="text-muted mb-8">
          Cette adresse n&apos;existe pas ou a été déplacée. Vérifiez l&apos;URL ou
          revenez à l&apos;accueil.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button as="a" href="/" size="md">
            Retour à l&apos;accueil
          </Button>
          <Button as="a" href="/contact" variant="secondary" size="md">
            Nous écrire
          </Button>
        </div>
      </Container>
    </div>
  );
}
