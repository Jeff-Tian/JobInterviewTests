using System;

namespace MSTest
{
    class Program
    {
        static void Main(string[] args)
        {
            // Naive test: Expecte all true
            //Console.WriteLine(ReverseString("abcd") == "dcba");
            Test("dcba", ReverseString("abcd"));
            Test("", ReverseString(""));

            //Console.WriteLine("abcd".MyIndexOf("cd") == 2);
            //Console.WriteLine("abcd".MyIndexOf("abcde") == -1);
            //Console.WriteLine("abcd".MyIndexOf("a") == 0);
            //Console.WriteLine("abcd".MyIndexOf("b") == 1);

            Test(2, "abcd".MyIndexOf("cd"));
            Test(-1, "abcd".MyIndexOf("abcde"));
            Test(0, "abcd".MyIndexOf("a"));
            Test(1, "abcd".MyIndexOf("b"));
            Test(-1, "abcd".MyIndexOf(""));
            Test(-1, "".MyIndexOf(""));
            Test(-1, "".MyIndexOf("abcd"));
            Test(0, "abcd".MyIndexOf("abcd"));

            Console.ReadKey();
        }

        private static void Test(object expect, object actual)
        {
            Console.WriteLine("Expect = {0}; Actual: {1}. {2}", expect, actual, expect.Equals(actual) ? "PASS" : "FAIL");
        }

        private static string ReverseString(string s)
        {
            var a = s.ToCharArray();
            Array.Reverse(a);
            return new String(a);
        }
    }

    public static class StringHelper
    {
        public static int MyIndexOf(this string me, string s, StringComparison comparison = StringComparison.Ordinal)
        {
            if (s.Length <= 0 || s.Length > me.Length)
            {
                return -1;
            }

            for (var i = 0; i < me.Length - s.Length + 1; i++)
            {
                var slice = me.Substring(i, s.Length);

                if (slice.Equals(s, comparison))
                {
                    return i;
                }
            }

            return -1;
        }
    }
}
