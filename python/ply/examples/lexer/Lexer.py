import ply.lex as lex

class Lexer:
    # List of token names.   This is always required
    tokens = (
            'NUMBER',
            'STRING',
            'IDENTIFIER',
            'COMMENT',
            )

    def t_COMMENT(self, t):
        r'//.*'
        pass

    # A regular expression rule with some action code
    # Note addition of self parameter since we're in a class
    def t_NUMBER(self, t):
        r'[0-9]+'
        t.value = int(t.value)    
        return t

    def t_STRING(self, t):
        r'"(\\"|\\\\|\\n|[^"])*"'
        t.value = t.value.strip('"')
        return t

    def t_IDENTIFIER(self, t):
        r'[A-Z_a-z][A-Z_a-z0-9]*|==|<=|>=|&&|\|\||[!"#$%&\'()*+,-./:;<=>?@[\\\]^_`{|}~]'
        return t

    # Define a rule so we can track line numbers
    def t_newline(self,t):
        r'\n+'
        t.lexer.lineno += len(t.value)

    # A string containing ignored characters (spaces and tabs)
    t_ignore = ' \t'

    # Error handling rule
    def t_error(self,t):
        print("Illegal character '%s'" % t.value[0])
        t.lexer.skip(1)

    # Build the lexer
    def __init__(self,**kwargs):
        self.lexer = lex.lex(module=self, **kwargs)
    
    # Test it output
    def test(self,data):
        self.lexer.input(data)
        while True:
             tok = self.lexer.token()
             if not tok: break
             print("==>", tok.value)

if __name__ == "__main__":
    # Build the lexer and try it out
    m = Lexer()
    with open('test.txt') as f:
        m.test(f.read())     # Test it
