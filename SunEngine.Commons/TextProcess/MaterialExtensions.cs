using System;
using AngleSharp.Dom;
using AngleSharp.Dom.Html;
using AngleSharp.Parser.Html;
using SunEngine.Commons.Models;

namespace SunEngine.Commons.TextProcess
{
    public static class MaterialExtensions
    {
        public static void MakePreviewAndDescription(this Material material, int descriptionLength, int previewLength)
        {
            var rez = MakePreviewAndDescription(material.Text, descriptionLength, previewLength);
            material.Description = rez.description;
            material.Preview = rez.preview;
        }


        public static (string preview, string description) MakePreviewAndDescription(string html, int descriptionLength,
            int previewLength)
        {
            if (html == null)
                return (null, null);

            (string preview, string description) rez;

            HtmlParser parser = new AngleSharp.Parser.Html.HtmlParser();
            var doc = parser.Parse(html);
            int currentSize = 0;
            var endText = (IText) FindTextNodePlus(doc.Body, ref currentSize, previewLength);
            if (endText != null)
            {
                ClearNext(endText);
            }

            if (string.IsNullOrWhiteSpace(doc.Body.TextContent))
            {
                rez.description = null;
            }
            else
            {
                rez.description = doc.Body.TextContent.Substring(0,
                                      Math.Min(descriptionLength, doc.Body.TextContent.Length))
                                  + "...";
            }

            var img1 = FindFirstBigImage(doc);
            if (img1 != null)
            {
                ClearNext(img1);
            }

            var iframe = FindFirstIFrame(doc);
            if (iframe != null)
            {
                ClearNext(iframe);
            }

            if (doc.Body.InnerHtml == null)
            {
                rez.preview = null;
            }
            else
            {
                rez.preview = doc.Body.InnerHtml;
            }

            return rez;
        }

        static IElement FindFirstIFrame(IHtmlDocument doc)
        {
            return doc.QuerySelector("iframe");
        }

        static INode FindTextNodePlus(INode ell, ref int currentSize, int maxSize)
        {
            if (ell.NodeType == NodeType.Text)
            {
                currentSize += ell.TextContent.Length;
                if (currentSize >= maxSize)
                {
                    ell.TextContent = ell.TextContent.Substring(0, ell.TextContent.Length - currentSize + maxSize) +
                                      "...";
                    return ell;
                }
                else
                {
                    return null;
                }
            }

            foreach (var el in ell.ChildNodes)
            {
                var ret = FindTextNodePlus(el, ref currentSize, maxSize);
                if (ret != null)
                    return ret;
            }

            return null;
        }

        static IHtmlImageElement FindFirstBigImage(IHtmlDocument doc)
        {
            for (int i = 0; i < doc.Images.Length; i++)
            {
                if (doc.Images[i].Source.ToLower().Contains("emoticons")) // TODO определение смайликов
                    continue;
                return doc.Images[i];
            }

            return null;
        }

        static void ClearNext(INode ell)
        {
            if (ell == null)
            {
                return;
            }

            var cell = ell.NextSibling;
            while (cell != null)
            {
                var next = cell.NextSibling;

                if (cell is IElement el)
                    el.Remove();
                else if (cell is IText text)
                    text.Remove();

                cell = next;
            }

            ClearNext(ell.ParentElement);
        }

        static INode GetLastTextNode(INode node)
        {
            if (node.LastChild == null)
                return null;
            if (node.LastChild.NodeType == NodeType.Text)
            {
                return node;
            }

            return GetLastTextNode(node.LastChild);
        }
    }
}