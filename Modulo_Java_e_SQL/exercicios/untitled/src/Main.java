import model.*;

public class Main {
    public static void main(String[] args) {
            Biblioteca bib = new Biblioteca(10);

            // Cadastro
            ItemBiblioteca livro1 = new Livro("L001", "Java Como Programar");
            ItemBiblioteca livro2 = new Livro("L002", "Clean Code");
            ItemBiblioteca rev1 = new Revista("R001", "Tech Monthly");
            ItemBiblioteca rev2 = new Revista("R002", "Veja");

            bib.adicionarAoAcervo(livro1);
            bib.adicionarAoAcervo(livro2);
            bib.adicionarAoAcervo(rev1);
            bib.adicionarAoAcervo(rev2);

            Usuario aluno = new Aluno("João (Aluno)");
            Usuario prof = new Professor("Maria (Professora)");

            bib.listarAcervo();

            // Cenário 1: Empréstimos bem-sucedidos
            bib.emprestar(livro1, aluno);
            bib.emprestar(livro2, aluno);
            bib.emprestar(rev1, aluno);

            // Cenário 2: Recusado por limite atingido (Aluno tem limite 3)
            bib.emprestar(rev2, aluno); // Deve ser recusado

            // Devolução para permitir novo empréstimo
            bib.devolver(livro1, aluno);
            bib.emprestar(rev2, aluno); // Agora deve ter sucesso
        }
    }